/**
 * This component renders a customizable button with an icon and text.
 * The icon displayed is determined by the `icc` prop, which maps to an icon file from the `ico_map` object.
 *
 * The button's appearance and behavior are also configurable via other props:
 * - `children`: The text or elements to display inside the button.
 * - `className`: Additional CSS classes for styling the button.
 * - `isActive`: A boolean indicating whether the button is active, which changes its appearance.
 * - `onClick`: A function to handle click events on the button.
 *
 * Example usage:
 * <Button icc="rain" isActive={true} onClick={handleClick}>Rain</Button>
 */

import React, { useState, ReactNode } from 'react';
import Cloud_rain from  '../icons/cloud_rain.svg';
import Sound_ico from  '../icons/cloud_rain.svg';
import Cloud from '../icons/cloud.svg';
import trees from '../icons/trees.svg';
import water from '../icons/water_ocean.svg';
import wocean from '../icons/water_ocean.svg';
import fan from '../icons/fan.svg';
import fire from '../icons/fire.svg';
import night from '../icons/night.svg';
import music_note from '../icons/music_note.svg';
import snow1 from '../icons/snow1.svg';
import street from '../icons/street.svg';
import bell from '../icons/bell.svg';
import day from '../icons/day.svg';
import noise from '../icons/noise.svg';
import thunder from '../icons/thunder.svg';
import bird from '../icons/bird.svg';
import owl from '../icons/owl.svg';
import train from '../icons/train.svg';
import cafe from '../icons/cafe.svg';
import piano from '../icons/piano.svg';
import car from '../icons/car.svg';
import flute from '../icons/flute.svg';
import random from '../icons/random.svg';
import tv from '../icons/tv.svg';
import cat from '../icons/cat.svg';
import forest from '../icons/forest.svg';
import river from '../icons/river.svg';
import water_ocean from '../icons/water_ocean.svg';
import clapping from '../icons/clapping.svg';
import frog from '../icons/frog.svg';
import sea from '../icons/sea.svg';
import wind from '../icons/wind.svg';
import clock from '../icons/clock.svg';
import music from '../icons/music.svg';
import snow from '../icons/snow.svg';
import xylophone from '../icons/xylophone.svg';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  icc?: string;
  isActive?: boolean;
  onClick?: () => void;
}
const ico_map: { [key: string]: string } = {
  random: random,
  sound: Sound_ico,
  clouds: Cloud,
  rain: Cloud_rain,
  trees: trees,
  water: water,
  fan: fan,
  ocean: wocean,
  fire: fire,
  night: night,
  twink: music_note,
  noise: noise,
  day: day,
  kitty: cat,
  sand: Sound_ico,
  forest: forest,
  Xylophone: xylophone,
  thunder: thunder,
  cermony: Sound_ico,
  cars: car,
  tv: tv,
  piano: piano,
  owl: owl,
  sea: sea,
  train: train,
  music: music,
  flute: flute,
  street: street,
  river: river,
  ding: bell,
  cafe: cafe,
  birds: bird,
  clock: clock,
  frog: frog,
  wind: wind,
  clap: clapping,
  snow: snow,
  vaccum: Sound_ico,
};
const Button = ({ icc, children, className, onClick, isActive, ...props } : ButtonProps) => {


  return (
    <div className={`flex flex-col items-center justify-center gap-2 ${className}`}>
      <button
        className={`
          flex items-center justify-center px-4 py-2 bg-[#B8C37E]
          button ${isActive ? 'active' : 'inactive'}  text-white font-bold shadow-md hover:bg-[#9AAE6C]
        `}
        style={{
          borderRadius: '15px',
          width: 230,
          height: 60,
          marginTop: 30,
        }}
        onClick={onClick}
        {...props}>
          
      <img src={ico_map[icc!] || ico_map["sound"]} />

      </button>
      <p className="text-center text-white">{children}</p>
    </div>
  );
};
export default Button;
