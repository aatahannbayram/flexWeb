import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const features = [
    {
        title: "Learning And Skills",
        description: "Enable your frontline workers with the knowledge and support to perform safely and to standards.",
        image: "/images/features/learning.png"
    },
    {
        title: "Workflow",
        description: "Easily capture and centralize the knowledge of experts, making it easy to share across shifts and locations.",
        image: "/images/features/workflow.png"
    },
    {
        title: "Collaboration",
        description: "Continuous improvement is driven by workers providing feedback on instructions, with authors following up to improve documentation.",
        image: "/images/features/onboarding-image-4.png"
    },
    {
        title: "Knowledge Sharing",
        description: "Share expertise and best practices across your organization, ensuring consistent standards and procedures.",
        image: "/images/features/knowledge.png"
    },
    {
        title: "Proactive AI Analytics",
        description: "Leverage AI-powered analytics to identify trends, predict needs, and optimize workforce performance.",
        image: "/images/features/analytics.png"
    },
    {
        title: "Smart Questions",
        description: "AI-powered system that intelligently answers questions and provides relevant information to workers in real-time.",
        image: "/images/features/question.png"
    }
];

function Feature() {
    return (
        <div className="w-full py-20 lg:py-40 dark">
            <div className="bg-black/95 py-20">
                <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
                    <div className="flex flex-col gap-10">
                        <div className="flex gap-4 flex-col items-start max-w-3xl mx-auto text-center">
                            <div className="mx-auto">
                                <Badge
                                    variant="outline"
                                    className="bg-[#EC6726] border-white/40 text-white font-medium hover:bg-[#EC6726]/90 transition-colors"
                                >
                                    Knowledge
                                </Badge>
                            </div>
                            <div className="flex gap-2 flex-col">
                                <h2 className="text-3xl md:text-5xl tracking-tighter font-regular text-[#EC6726]">
                                    Enable your frontline workers
                                </h2>
                                <p className="text-lg leading-relaxed tracking-tight text-white/60 mx-auto">
                                    Empower your workforce with comprehensive knowledge management and collaborative learning solutions.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col gap-2 bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors border border-white/10"
                                >
                                    <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                                        <Image
                                            src={feature.image}
                                            alt={feature.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <h3 className="text-xl tracking-tight font-medium text-white">{feature.title}</h3>
                                    <p className="text-white/60 text-base">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Feature }; 