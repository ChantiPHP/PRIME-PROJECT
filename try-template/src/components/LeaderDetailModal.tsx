import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { X, Mail, Linkedin, Twitter } from "lucide-react";

interface LeaderDetailModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  leader?: {
    id: string;
    name: string;
    position: string;
    photo: string;
    bio: string;
    achievements?: string[];
    education?: string[];
    experience?: string[];
    contact?: {
      email?: string;
      linkedin?: string;
      twitter?: string;
    };
  };
}

const LeaderDetailModal = ({
  isOpen = true,
  onClose = () => {},
  leader = {
    id: "1",
    name: "Jet Yu",
    position: "Founder & Chief Executive Officer",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    bio: "Jet Yu is the visionary founder and CEO of PRIME Philippines, with over 20 years of experience in real estate development and management. Under his leadership, PRIME Philippines has become one of the country's leading real estate consultancy firms, known for innovative solutions and exceptional service. Jet's forward-thinking approach has transformed the Philippine real estate landscape.",
    achievements: [
      "Founded PRIME Philippines and led its growth to become a market leader",
      "Expanded operations to 10+ cities across the Philippines",
      "Recognized as one of the Top 30 Under 30 Entrepreneurs in Asia",
      "Pioneered data-driven real estate consultancy in the Philippines",
      "Led over 500 successful real estate transactions valued at ₱50+ billion",
    ],
    education: [
      "MBA, Asian Institute of Management",
      "BS Real Estate Management, De La Salle University",
      "Executive Education, Stanford Graduate School of Business",
    ],
    experience: [
      "Founder & CEO, PRIME Philippines (2009-Present)",
      "Board Member, Philippine Chamber of Real Estate (2015-Present)",
      "Advisor, Philippine Economic Zone Authority (2018-Present)",
    ],
    contact: {
      email: "jet.yu@primephilippines.com",
      linkedin: "linkedin.com/in/jetyu",
      twitter: "@jetyu_prime",
    },
  },
}: LeaderDetailModalProps) => {
  const [activeTab, setActiveTab] = useState("bio");

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-white max-w-4xl max-h-[80vh] overflow-hidden p-0">
        <DialogClose className="absolute right-4 top-4 z-10">
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </DialogClose>

        <div className="grid grid-cols-1 md:grid-cols-3 h-full">
          {/* Left column with photo and basic info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-50 p-6 flex flex-col items-center justify-start"
          >
            <Avatar className="h-40 w-40 mb-6">
              <AvatarImage src={leader.photo} alt={leader.name} />
              <AvatarFallback>
                {leader.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <h2 className="text-2xl font-bold text-center">{leader.name}</h2>
            <p className="text-slate-600 text-center mb-6">{leader.position}</p>

            <Separator className="my-4" />

            {leader.contact && (
              <div className="w-full space-y-3 mt-4">
                <h3 className="text-sm font-semibold text-slate-700">
                  Contact
                </h3>

                {leader.contact.email && (
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    size="sm"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    <span className="truncate">{leader.contact.email}</span>
                  </Button>
                )}

                {leader.contact.linkedin && (
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    size="sm"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    <span className="truncate">{leader.contact.linkedin}</span>
                  </Button>
                )}

                {leader.contact.twitter && (
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    size="sm"
                  >
                    <Twitter className="mr-2 h-4 w-4" />
                    <span className="truncate">{leader.contact.twitter}</span>
                  </Button>
                )}
              </div>
            )}
          </motion.div>

          {/* Right column with tabs and content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="col-span-2 p-6"
          >
            <DialogHeader>
              <DialogTitle className="text-2xl">
                About {leader.name}
              </DialogTitle>
              <DialogDescription>
                Learn more about {leader.name}'s background, achievements, and
                experience.
              </DialogDescription>
            </DialogHeader>

            <Tabs
              defaultValue="bio"
              value={activeTab}
              onValueChange={setActiveTab}
              className="mt-6"
            >
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="bio">Biography</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
              </TabsList>

              <ScrollArea className="h-[350px] pr-4">
                <TabsContent value="bio" className="mt-0">
                  <p className="text-slate-700 leading-relaxed">{leader.bio}</p>
                </TabsContent>

                <TabsContent value="achievements" className="mt-0">
                  <ul className="space-y-3">
                    {leader.achievements?.map((achievement, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="h-2 w-2 mt-2 rounded-full bg-blue-500 mr-3" />
                        <p className="text-slate-700">{achievement}</p>
                      </motion.li>
                    ))}
                  </ul>
                </TabsContent>

                <TabsContent value="education" className="mt-0">
                  <ul className="space-y-3">
                    {leader.education?.map((edu, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="h-2 w-2 mt-2 rounded-full bg-green-500 mr-3" />
                        <p className="text-slate-700">{edu}</p>
                      </motion.li>
                    ))}
                  </ul>
                </TabsContent>

                <TabsContent value="experience" className="mt-0">
                  <ul className="space-y-3">
                    {leader.experience?.map((exp, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="h-2 w-2 mt-2 rounded-full bg-purple-500 mr-3" />
                        <p className="text-slate-700">{exp}</p>
                      </motion.li>
                    ))}
                  </ul>
                </TabsContent>
              </ScrollArea>
            </Tabs>

            <DialogFooter className="mt-6">
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
            </DialogFooter>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeaderDetailModal;
