import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LeaderCard from "./LeaderCard";
import LeaderDetailModal from "./LeaderDetailModal";

interface Leader {
  id: string;
  name: string;
  position: string;
  bio: string;
  photo: string;
  tier: "Executive" | "Senior Management" | "Management";
  achievements?: string[];
  contact?: {
    email?: string;
    linkedin?: string;
  };
}

interface LeadershipGridProps {
  leaders?: Leader[];
}

const LeadershipGrid: React.FC<LeadershipGridProps> = ({ leaders = [] }) => {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [leadersByTier, setLeadersByTier] = useState<{
    [key: string]: Leader[];
  }>({});

  // Default leaders data if none provided
  const defaultLeaders: Leader[] = [
    {
      id: "1",
      name: "Jet Yu",
      position: "Founder & Chief Executive Officer",
      bio: "Jet Yu is the visionary founder of PRIME Philippines with over 20 years of experience in real estate development and management. His innovative approach has transformed the Philippine real estate landscape.",
      photo:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
      tier: "Executive",
      achievements: [
        "Founded PRIME Philippines and led its growth to become a market leader",
        "Pioneered innovative real estate solutions across the Philippines",
        "Recognized as one of the Top 30 Under 30 Entrepreneurs in Asia",
      ],
      contact: {
        email: "jet.yu@primephilippines.com",
        linkedin: "linkedin.com/in/jetyu",
      },
    },
    {
      id: "2",
      name: "Maria Santos",
      position: "Chief Operations Officer",
      bio: "Maria brings 15 years of operational excellence to Prime Philippines with a background in finance and property management.",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=maria",
      tier: "Executive",
      achievements: [
        "Streamlined operations reducing costs by 30%",
        "Implemented new property management systems",
      ],
      contact: {
        email: "maria.santos@primephilippines.com",
        linkedin: "linkedin.com/in/mariasantos",
      },
    },
    {
      id: "3",
      name: "David Reyes",
      position: "Chief Financial Officer",
      bio: "David is a certified accountant with extensive experience in real estate finance and investment strategies.",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
      tier: "Executive",
      achievements: [
        "Secured $50M in new investment funding",
        "Restructured company finances for optimal growth",
      ],
      contact: {
        email: "david.reyes@primephilippines.com",
        linkedin: "linkedin.com/in/davidreyes",
      },
    },
    {
      id: "4",
      name: "Anna Lim",
      position: "VP of Marketing",
      bio: "Anna has transformed the company's brand presence through innovative digital marketing strategies.",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=anna",
      tier: "Senior Management",
      achievements: [
        "Increased brand recognition by 45%",
        "Launched award-winning marketing campaigns",
      ],
      contact: {
        email: "anna.lim@primephilippines.com",
        linkedin: "linkedin.com/in/annalim",
      },
    },
    {
      id: "5",
      name: "Carlos Tan",
      position: "VP of Development",
      bio: "Carlos oversees all property development projects with a focus on sustainability and innovation.",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=carlos",
      tier: "Senior Management",
      achievements: [
        "Completed 12 major development projects",
        "Pioneered green building standards",
      ],
      contact: {
        email: "carlos.tan@primephilippines.com",
        linkedin: "linkedin.com/in/carlostan",
      },
    },
    {
      id: "6",
      name: "Elena Cruz",
      position: "Director of Human Resources",
      bio: "Elena has built a strong company culture and implemented effective talent acquisition strategies.",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=elena",
      tier: "Management",
      achievements: [
        "Reduced staff turnover by 25%",
        "Implemented comprehensive training programs",
      ],
      contact: {
        email: "elena.cruz@primephilippines.com",
        linkedin: "linkedin.com/in/elenacruz",
      },
    },
  ];

  // Group leaders by tier
  useEffect(() => {
    const dataToUse = leaders.length > 0 ? leaders : defaultLeaders;
    const grouped = dataToUse.reduce<{ [key: string]: Leader[] }>(
      (acc, leader) => {
        if (!acc[leader.tier]) {
          acc[leader.tier] = [];
        }
        acc[leader.tier].push(leader);
        return acc;
      },
      {},
    );

    setLeadersByTier(grouped);
  }, [leaders]);

  const handleLeaderClick = (leader: Leader) => {
    setSelectedLeader(leader);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedLeader(null), 300); // Clear after animation
  };

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      {Object.entries(leadersByTier).map(([tier, tierLeaders], index) => (
        <motion.section
          key={tier}
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {tier} Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tierLeaders.map((leader) => (
              <motion.div key={leader.id} variants={cardVariants}>
                <LeaderCard
                  leader={leader}
                  onClick={() => handleLeaderClick(leader)}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>
      ))}

      {selectedLeader && (
        <LeaderDetailModal
          leader={selectedLeader}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default LeadershipGrid;
