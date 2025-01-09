'use client';

import { useState } from 'react';
import { Card, CardBody, Input, Button, Image } from "@nextui-org/react";
import { motion } from "framer-motion";

interface LoginProps {
  onLogin: (email: string, password: string) => void;
}

export function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="w-full max-w-md min-w-[500px] apple-card">
          <CardBody className="p-8">
            <div className="flex flex-col items-center mb-8">
              <Image
                width={60}
                height={60}
                src="https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-n-design_460848-8723.jpg?t=st=1736417901~exp=1736421501~hmac=21baf2d99e83bdab1a1caf8ba5abdde8d32a7195d61da956c91bf86b4c81c029&w=740"
                alt="Logo"
                className="mb-4"
              />
              <h1 className="text-2xl font-semibold">Welcome to Nexhire</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Sign in to continue</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                variant="bordered"
                size="lg"
                classNames={{
                  input: "text-base",
                  label: "text-base"
                }}
              />
              <Input
                type="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                variant="bordered"
                size="lg"
                classNames={{
                  input: "text-base",
                  label: "text-base"
                }}
              />
              <Button 
                type="submit" 
                color="default"
                variant="flat"
                size="lg"
                className="w-full"
              >
                Sign In
              </Button>
            </form>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
}