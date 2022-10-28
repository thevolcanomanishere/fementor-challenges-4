/// <reference types="vite-plugin-svgr/client" />
import React from 'react';
import { ReactComponent as Ellipsis } from '../../public/icon-ellipsis.svg';
import { ReactComponent as Exercise } from '../../public/icon-exercise.svg';
import { ReactComponent as Play } from '../../public/icon-play.svg';
import { ReactComponent as SelfCare } from '../../public/icon-self-care.svg';
import { ReactComponent as Social } from '../../public/icon-social.svg';
import { ReactComponent as Study } from '../../public/icon-study.svg';
import { ReactComponent as Work } from '../../public/icon-work.svg';

const Icons = {
  Elipsis: Ellipsis,
  Exercise: Exercise,
  Play: Play,
  'Self Care': SelfCare,
  Social: Social,
  Study: Study,
  Work: Work
} as const;

const Icon = ({
  name,
  styling
}: {
  name: keyof typeof Icons;
  styling?: string;
}) => {
  const Component = Icons[name];
  return <Component className={styling} />;
};

export default Icon;
