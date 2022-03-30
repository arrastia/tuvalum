import styled from 'styled-components';

import { Button } from 'ui/_styles/components/Button';

const ThemeButton = styled(Button)`
  background: var(--transparent);
  border: 0;
  box-sizing: border-box;
  display: inline-flex;
  font: inherit;
  height: 40px;
  justify-content: center;
  opacity: 1;
  padding: 0;
  text-transform: none;
  transform: scale(0.8);
  transition: opacity 0.3s ease;
  width: 40px;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-font-smoothing: antialiased;
  .item-1 {
    border-radius: 50%;
    box-sizing: border-box;
    cursor: pointer;
    font-kerning: normal;
    font: inherit;
    height: 24px;
    margin: 0;
    padding: 0;
    position: relative;
    text-transform: none;
    width: 24px;
    -webkit-font-smoothing: antialiased;
  }
  .moon_item-1 {
    background-color: var(--theme-ui-colors-text, hsl(0, 0%, 10%));
    overflow: hidden;
    transform: scale(1);
    transition: all 0.45s ease;
    &::before {
      /* background-color: var(--theme-ui-colors-background, hsl(0, 0%, 100%)); */
      background-color: rgb(255 255 255 / 80%);
      border-color: var(--theme-ui-colors-background, hsl(0, 0%, 100%));
      /* border-color: none; */
      border-radius: 50%;
      border: 2px solid;
      content: '';
      height: 24px;
      opacity: 1;
      position: absolute;
      right: -9px;
      top: -9px;
      transform: translate(0, 0);
      transition: 0.45s ease;
      width: 24px;
    }
    &::after {
      border-radius: 50%;
      box-shadow: 0 -23px 0 hsl(0, 0%, 10%), 0 23px 0 hsl(0, 0%, 10%), 23px 0 0 hsl(0, 0%, 10%), -23px 0 0 hsl(0, 0%, 10%),
        15px 15px 0 hsl(0, 0%, 10%), -15px 15px 0 hsl(0, 0%, 10%), 15px -15px 0 hsl(0, 0%, 10%), -15px -15px 0 hsl(0, 0%, 10%);
      content: '';
      height: 8px;
      left: 50%;
      margin: -4px 0 0 -4px;
      position: absolute;
      top: 50%;
      transform: scale(0);
      transition: all 0.35s ease;
      width: 8px;
    }
  }
  .sun_item-1 {
    background-color: var(--theme-ui-colors-text, hsl(0, 0%, 100%));
    overflow: visible;
    transform: scale(0.55);
    transition: all 0.45s ease 0s;
    &::before {
      background-color: var(--theme-ui-colors-background, hsl(0, 0%, 5%));
      border-image: initial;
      border-radius: 50%;
      border-style: solid;
      border-width: 2px;
      content: '';
      height: 24px;
      opacity: 0;
      position: absolute;
      right: -9px;
      top: -9px;
      transform: translate(14px, -14px);
      transition: transform 0.45s ease 0s;
      width: 24px;
    }
    &::after {
      border-radius: 50%;
      box-shadow: rgb(255, 255, 255) 0px -23px 0px, rgb(255, 255, 255) 0px 23px 0px, rgb(255, 255, 255) 23px 0px 0px, rgb(255, 255, 255) -23px 0px 0px,
        rgb(255, 255, 255) 15px 15px 0px, rgb(255, 255, 255) -15px 15px 0px, rgb(255, 255, 255) 15px -15px 0px, rgb(255, 255, 255) -15px -15px 0px;
      content: '';
      height: 8px;
      left: 50%;
      margin: -4px 0px 0px -4px;
      position: absolute;
      top: 50%;
      transform: scale(1);
      transition: all 0.35s ease 0s;
      width: 8px;
    }
  }
  .item-2 {
    border-radius: 50%;
    box-sizing: border-box;
    cursor: pointer;
    font-kerning: normal;
    font: inherit;
    height: 24px;
    margin: 0;
    padding: 0;
    position: absolute;
    right: -1px;
    text-transform: none;
    top: -8px;
    width: 24px;
    -webkit-font-smoothing: antialiased;
  }
  .moon_item-2 {
    background-color: var(--theme-bg-color, hsl(0, 0%, 100%));
    /* background-color: var(--theme-bg-color); */
    border: 0;
    opacity: 1;
    transform: translate(0, 0);
    transition: transform 0.45s ease;
  }
  .sun_item-2 {
    background-color: var(--theme-ui-colors-background, hsl(0, 0%, 5%));
    /* background-color: pink; */
    border-color: initial;
    border-image: initial;
    border-style: initial;
    border-width: 0px;
    opacity: 0;
    transform: translate(14px, -14px);
    transition: transform 0.45s ease 0s;
  }
`;

export const Styles = { ThemeButton };
