"use client";
import {
  AlertDialog,
  Box,
  Button,
  Card,
  Flex,
  Text,
  TextField,
} from "@radix-ui/themes";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [userType, setUserType] = useState<string>("");
  const [showForm, setShowForm] = useState<boolean>(false);
  const [error, setError] = useState<{
    email?: string;
    password?: string;
    fetchError?: string;
  }>();
  const [alertVisible, setAlertVisible] = useState<boolean>(false);

  const validate = () => {
    const errors: { email?: string; password?: string } = {};
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const err = validate();
    setError(err);
    if (Object.keys(err).length === 0) {
      // Handle successful validation
    } else {
      setAlertVisible(true);
    }
  };

  return (
    <div className="flex flex-row justify-center items-center h-screen">
      {!showForm ? (
        <motion.div
          initial={{ opacity: 1, scale: 0 }}
          animate={{ opacity: showForm?0:1, scale: 1 }}
          transition={{ duration: 0.5,ease:"linear" }}
          className="flex flex-col justify-center items-center border-solid border-customBlack border rounded-full p-10"
        >
          <Text className="text-customBlack font-mono">
            Are you an Investor or an Entrepreneur/Startup Company?
          </Text>
          <div className="flex flex-row justify-between w-full px-6">
            <Button
              className="mb-5"
              onClick={() => {
                setUserType("Investor");
                setShowForm(true);
              }}
            >
              <Text className="text-white font-mono">Investor</Text>
            </Button>
            <Button
              onClick={() => {
                setUserType("Startup");
                setShowForm(true);
              }}
            >
              <Text className="text-white font-mono">Entrepreneur/Startup</Text>
            </Button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 ,ease:"backIn"}}
          className="flex flex-col justify-center items-center border-solid border-customBlack border rounded-md p-10"

        >
          <Button onClick={()=>{setUserType("");setShowForm(false);}}>Back</Button>
          <Box
            width="600px"
            className="border-black bg-slate-100 p-10 rounded-lg"
            height="auto"
          >
            <Card size="4" variant="ghost">
              <Box>
                <TextField.Root
                  type="email"
                  placeholder="Enter your email"
                  className="my-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error?.email && (
                  <Text className="text-red-600">{error.email}</Text>
                )}
                <TextField.Root
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error?.password && (
                  <Text className="text-red-600">{error.password}</Text>
                )}
                <div className="flex flex-row items-center w-full justify-center mt-4">
                  <Button className="my-3" size="3" onClick={handleSubmit}>
                    <Text>Login</Text>
                  </Button>
                </div>
              </Box>
              <Box className="mt-4">
                <Text>
                  Don't have an account?{" "}
                  <Link href="/auth/register">
                    <Text className="text-red-600">Register</Text>
                  </Link>
                </Text>
              </Box>
            </Card>
          </Box>
        </motion.div>
      )}
      {alertVisible && (
        <AlertDialog.Root open={alertVisible}>
          <AlertDialog.Content maxWidth="450px">
            <AlertDialog.Title>Login Unsuccessful</AlertDialog.Title>
            <AlertDialog.Description className="p-4 rounded">
              <Flex className="flex flex-col">
                {error?.email && <Text className="m-2">{error.email}</Text>}
                {error?.password && (
                  <Text className="m-2">{error.password}</Text>
                )}
                {error?.fetchError && (
                  <Text className="m-2">{error.fetchError}</Text>
                )}
              </Flex>
            </AlertDialog.Description>
            <Flex className="flex flex-row justify-center items-center w-full">
              <AlertDialog.Cancel onClick={() => setAlertVisible(false)}>
                <Button variant="soft" color="gray">
                  Ok
                </Button>
              </AlertDialog.Cancel>
            </Flex>
          </AlertDialog.Content>
        </AlertDialog.Root>
      )}
    </div>
  );
}
