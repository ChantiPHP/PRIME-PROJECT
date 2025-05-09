import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Linkedin, Mail, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LeaderCardProps {
  id: string;
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
  linkedIn?: string;
  email?: string;
  onViewDetails: (id: string) => void;
}

const LeaderCard = ({
  id = "1",
  name = "Jet Yu",
  position = "Founder & Chief Executive Officer",
  bio = "Visionary founder of PRIME Philippines with over 20 years of experience transforming the Philippine real estate landscape through innovative solutions.",
  imageUrl = "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  linkedIn = "",
  email = "",
  onViewDetails = () => {},
}: LeaderCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="h-full overflow-hidden bg-white cursor-pointer">
        <CardContent className="p-0 h-full flex flex-col">
          <div className="relative overflow-hidden" style={{ height: "280px" }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
                style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <Avatar className="w-32 h-32">
                  <AvatarImage src={imageUrl} alt={name} />
                  <AvatarFallback className="text-3xl">
                    {name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </div>
            )}
          </div>

          <div className="p-5 flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-1 text-gray-900">{name}</h3>
              <p className="text-sm text-primary mb-3">{position}</p>
              <p className="text-sm text-gray-600 line-clamp-3">{bio}</p>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <div className="flex space-x-2">
                {linkedIn && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    asChild
                  >
                    <a
                      href={linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4 text-primary" />
                    </a>
                  </Button>
                )}
                {email && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    asChild
                  >
                    <a href={`mailto:${email}`}>
                      <Mail className="h-4 w-4 text-primary" />
                    </a>
                  </Button>
                )}
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="text-primary flex items-center gap-1 p-0"
                onClick={() => onViewDetails(id)}
              >
                View Profile
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default LeaderCard;
