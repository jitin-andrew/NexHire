'use client'

import { useState } from 'react';
import { 
  Card, 
  CardBody,
  Button,
  Avatar,
  Chip,
  Drawer,
  Input,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
} from "@nextui-org/react";
import { Users, Calendar, CheckSquare, Bell, Plus } from 'lucide-react';
import { motion } from "framer-motion";
import { CandidateDrawer } from './components/candidate-drawer';
import { Login }  from './components/login';
import { candidates as initialCandidates } from './data/candidates';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCandidate, setSelectedCandidate] = useState(initialCandidates[0]);
  const [candidates, setCandidates] = useState(initialCandidates);
  const [filteredCandidates, setFilteredCandidates] = useState(initialCandidates);
  const [searchFilters, setSearchFilters] = useState({ name: '', role: '', location: '' });

  const handleLogin = (email: string, password: string) => {
    if (email === 'admin@example.com' && password === 'password') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials. Use admin@example.com / password');
    }
  };

  const handleSearch = () => {
    const { name, role, location } = searchFilters;
    const filtered = candidates.filter(candidate => 
      candidate.name.toLowerCase().includes(name.toLowerCase()) &&
      candidate.role.toLowerCase().includes(role.toLowerCase()) &&
      candidate.location.toLowerCase().includes(location.toLowerCase())
    );
    setFilteredCandidates(filtered);
  };


  const handleSendMessage = (candidateId: string, message: string) => {
    setCandidates(candidates.map(candidate => {
      if (candidate.id === candidateId) {
        return {
          ...candidate,
          conversations: [
            ...candidate.conversations,
            {
              id: Date.now().toString(),
              sender: 'You',
              senderAvatar: '',
              message,
              timestamp: 'Just now'
            }
          ]
        };
      }
      return candidate;
    }));
  };

  const handleCompleteTask = (candidateId: string, taskId: string) => {
    setCandidates(candidates.map(candidate => {
      if (candidate.id === candidateId) {
        return {
          ...candidate,
          tasks: candidate.tasks.map(task => 
            task.id === taskId ? { ...task, status: 'completed' } : task
          )
        };
      }
      return candidate;
    }));
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <header className="glass-effect fixed top-0 w-full z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-semibold"
          >
            Nexhire
          </motion.h1>
          
          <div className="flex items-center space-x-4">
            <Button isIconOnly variant="bordered" className="text-gray-700 dark:text-gray-300">
              <Bell className="h-5 w-5" />
            </Button>
              <ThemeToggle/>
            <Button 
              color="danger"
              variant="ghost"
              onPress={() => setIsAuthenticated(false)}
            >
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <Card className="apple-card">
            <CardBody className="flex flex-row items-center justify-between p-6">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Candidates in Progress</p>
                <p className="text-3xl font-semibold mt-2">{candidates.length}</p>
              </div>
              <Users className="h-8 w-8 text-blue-500 dark:text-blue-400" />
            </CardBody>
          </Card>

          <Card className="apple-card">
            <CardBody className="flex flex-row items-center justify-between p-6">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Pending Tasks</p>
                <p className="text-3xl font-semibold mt-2">
                  {candidates.reduce((acc, curr) => 
                    acc + curr.tasks.filter(t => t.status === 'pending').length, 0
                  )}
                </p>
              </div>
              <CheckSquare className="h-8 w-8 text-green-500 dark:text-green-400" />
            </CardBody>
          </Card>

          <Card className="apple-card">
            <CardBody className="flex flex-row items-center justify-between p-6">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Upcoming Interviews</p>
                <p className="text-3xl font-semibold mt-2">
                  {candidates.reduce((acc, curr) => 
                    acc + curr.timeline.filter(t => t.status === 'current').length, 0
                  )}
                </p>
              </div>
              <Calendar className="h-8 w-8 text-purple-500 dark:text-purple-400" />
            </CardBody>
          </Card>
        </motion.div>

        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-8">
            <Input 
              label="Search by Name"
              variant="underlined"
              className="mb-4 md:mb-0"
              onChange={(e) => setSearchFilters({ ...searchFilters, name: e.target.value })}
            />
            <Input 
              label="Search by Role"
              variant="underlined"
              className="mb-4 md:mb-0"
              onChange={(e) => setSearchFilters({ ...searchFilters, role: e.target.value })}
            />
            <Input 
              label="Search by Location"
              variant="underlined"
              className="mb-4 md:mb-0"
              onChange={(e) => setSearchFilters({ ...searchFilters, location: e.target.value })}
            />
            <Button 
              color="primary"
              variant="ghost"
              onPress={handleSearch}
            >
              Search
            </Button>
          </div>

              <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" 
    >
      {filteredCandidates.map((candidate, index) => (
        <motion.div
          key={candidate.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card 
            className="apple-card cursor-pointer w-full max-w-md" 
            isPressable
            onPress={() => {
              setSelectedCandidate(candidate);
              onOpen();
            }}
          >
            <CardBody className="p-4">
              <div className="flex items-center w-full space-x-4">
                <Avatar
                  isBordered
                  src={candidate.avatar}
                  size="lg"
                  className="ring-2 ring-white dark:ring-gray-800"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{candidate.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{candidate.role}</p>
                </div>
                <Chip
                  variant="flat"
                  color="primary"
                  className="bg-blue-100 dark:bg-blue-900"
                >
                  {candidate.location}
                </Chip>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      ))}
    </motion.div>

        </div>
      </main>

      <Drawer
        isOpen={isOpen} 
        placement="left"
        onClose={onClose}
        size="full"
        classNames={{
          base: "h-[90vh] max-w-4xl m-auto",
          backdrop: "bg-gradient-to-br from-gray-900/60 to-gray-900/80 backdrop-blur-sm"
        }}
      >
        <DrawerContent>
          <DrawerHeader className="flex flex-col gap-1">
            <CandidateDrawer 
              candidate={selectedCandidate}
              onClose={onClose}
              onSendMessage={handleSendMessage}
              onCompleteTask={handleCompleteTask}
            />
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
}