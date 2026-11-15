import React from 'react';
import { Composition } from 'remotion';
import { Intro } from './Video';

export const Root: React.FC = () => (
  <>
    <Composition id="Intro16x9" component={Intro} durationInFrames={1800} fps={30} width={1920} height={1080} />
    <Composition id="Intro9x16" component={Intro} durationInFrames={1800} fps={30} width={1080} height={1920} />
  </>
);
