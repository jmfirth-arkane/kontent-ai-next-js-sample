import React from 'react';
import Link from 'next/link';

interface LoweCaseUrlLinkProps {
  to: string;
  className?: string;
  target?: string;
  children: React.ReactNode;
}

const LowerCaseUrlLink: React.FC<LoweCaseUrlLinkProps> = (props) => {
  // if (/^https?:\/\//.test(props.to) || /^mailto:/.test(props.to)) {
  //   return (
  //     <a href={props.to.toLowerCase()} {...props}>
  //       {props.children}
  //     </a>
  //   );
  // }
  // return <Link {...props} to={props.to.toLowerCase()} />;
  return (
    <Link href={props.to.toLowerCase()} {...props}>
      {props.children}
    </Link>
  );
};

export default LowerCaseUrlLink;
