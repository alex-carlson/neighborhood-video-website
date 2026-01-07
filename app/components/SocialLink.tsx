import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface SocialLinkProps {
    href: string;
    icon: IconDefinition;
    label: string;
    colorClass: string;
    hoverColorClass: string;
}

export default function SocialLink({ href, icon, label, colorClass, hoverColorClass }: SocialLinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center sm:justify-start space-x-2 ${colorClass} ${hoverColorClass} transition-colors bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg border border-gray-900`}
        >
            <FontAwesomeIcon icon={icon} className="w-5 h-5" />
            <span>{label}</span>
        </a>
    );
}