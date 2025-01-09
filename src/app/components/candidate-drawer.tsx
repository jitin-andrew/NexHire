'use client'

import { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  Input,
  Tab,
  Tabs,
  User,
  Chip,
  ScrollShadow,
  Divider
} from "@nextui-org/react";
import {
  X,
  Send,
  MapPin,
  Mail,
  Phone,
  Building,
  GraduationCap,
  Calendar,
  CheckCircle2
} from "lucide-react";
import { Candidate } from "../data/candidates";

interface CandidateDrawerProps {
  candidate: Candidate;
  onClose: () => void;
  onSendMessage: (candidateId: string, message: string) => void;
  onCompleteTask: (candidateId: string, taskId: string) => void;
}

export function CandidateDrawer({
  candidate,
  onClose,
  onSendMessage,
  onCompleteTask,
}: CandidateDrawerProps) {
  const [message, setMessage] = useState("");
  const [selectedTab, setSelectedTab] = useState("profile");

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(candidate.id, message);
      setMessage("");
    }
  };

  return (
    <div className="h-full flex flex-col ">
      <div className="flex items-center justify-between p-4 border-b">
        <User
          name={candidate.name}
          description={candidate.role}
          avatarProps={{
            src: candidate.avatar,
            name: candidate.name,
            size: "lg",
          }}
        />
      </div>

      <Tabs
        selectedKey={selectedTab}
        onSelectionChange={(key) => setSelectedTab(key.toString())}
        className="flex-1"
        fullWidth
      >
        <Tab key="profile" title="Profile">
          <ScrollShadow hideScrollBar className="flex-1 h-[calc(100vh-180px)]">
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardBody className="flex-row items-center space-x-3">
                    <Mail className="h-5 w-5 text-default-500" />
                    <span>{candidate.email}</span>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody className="flex-row items-center space-x-3">
                    <Phone className="h-5 w-5 text-default-500" />
                    <span>{candidate.phone}</span>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody className="flex-row items-center space-x-3">
                    <MapPin className="h-5 w-5 text-default-500" />
                    <span>{candidate.location}</span>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody className="flex-row items-center space-x-3">
                    <Building className="h-5 w-5 text-default-500" />
                    <span>{candidate.company}</span>
                  </CardBody>
                </Card>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Education</h3>
                <Card>
                  <CardBody className="flex-row items-start space-x-3">
                    <GraduationCap className="h-5 w-5 text-default-500 mt-1" />
                    <div>
                      <p className="font-medium">{candidate.education.degree}</p>
                      <p className="text-sm text-default-500">
                        {candidate.education.school}, {candidate.education.years}
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {candidate.skills.map((skill) => (
                    <Chip key={skill} variant="flat" size="sm">
                      {skill}
                    </Chip>
                  ))}
                </div>
              </div>
            </div>
          </ScrollShadow>
        </Tab>

        <Tab key="conversations" title="Conversations">
  <div className="flex flex-col h-[calc(100vh-180px)]">
  <ScrollShadow hideScrollBar className="flex-1 overflow-y-auto p-6 space-y-4">
  {candidate.conversations.map((conversation) => (
    <Card key={conversation.id} className="w-full">
      <CardBody>
        <div className="flex items-start space-x-4">
          <img
            src={conversation.senderAvatar}
            alt={conversation.sender}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <h4 className="text-base font-medium text-gray-900 dark:text-white">
              {conversation.sender}
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              {conversation.message}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-600">
              {conversation.timestamp}
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  ))}
</ScrollShadow>


    <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex items-center space-x-2">
      <Input
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        className="flex-1"
        endContent={
          <Button
            isIconOnly
            size="sm"
            variant="light"
            onPress={handleSendMessage}
          >
            <Send className="h-4 w-4" />
          </Button>
        }
      />
    </div>
  </div>
</Tab>


        <Tab key="timeline" title="Timeline">
          <ScrollShadow hideScrollBar className="flex-1 h-[calc(100vh-180px)]">
            <div className="p-6 space-y-4">
              {candidate.timeline.map((step, index) => (
                <Card
                  key={index}
                  className={step.status === "current" ? "border-primary" : ""}
                >
                  <CardBody className="flex-row items-center space-x-3">
                    <CheckCircle2
                      className={`h-5 w-5 ${
                        step.status === "completed"
                          ? "text-success"
                          : step.status === "current"
                          ? "text-primary"
                          : "text-default-500"
                      }`}
                    />
                    <div>
                      <p className="font-medium">{step.title}</p>
                      <p className="text-sm text-default-500">{step.date}</p>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </ScrollShadow>
        </Tab>

        <Tab key="tasks" title="Tasks">
          <ScrollShadow hideScrollBar className="flex-1 h-[calc(100vh-180px)]">
            <div className="p-6 space-y-4">
              {candidate.tasks.map((task) => (
                <Card key={task.id}>
                  <CardBody>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="font-medium">{task.title}</p>
                        <div className="flex items-center space-x-2 text-sm text-default-500">
                          <span>{task.assignee}</span>
                          <Divider orientation="vertical" className="h-4" />
                          <Calendar className="h-4 w-4" />
                          <span>{task.due}</span>
                        </div>
                      </div>
                      <Button
                        color={task.status === "completed" ? "success" : "primary"}
                        variant={task.status === "completed" ? "flat" : "solid"}
                        size="sm"
                        isDisabled={task.status === "completed"}
                        onPress={() => onCompleteTask(candidate.id, task.id)}
                      >
                        {task.status === "completed" ? "Completed" : "Complete"}
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </ScrollShadow>
        </Tab>
      </Tabs>
    </div>
  );
}