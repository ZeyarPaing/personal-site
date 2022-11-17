import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ContactItem = ({
  link,
  icon,
  display,
}: {
  link: string;
  icon: string;
  display: string;
}) => (
  <div className="flex items-center gap-2 font-secondary mb-2.5">
    <Image src={'/assets/icons/' + icon} width={20} height={20} alt="icon" />
    <Link
      href={link}
      className="hover:underline"
      rel="noopener noreferrer"
      target={link.startsWith('http') ? '_blank' : ''}
    >
      {display}
    </Link>
  </div>
);
export default ContactItem;
