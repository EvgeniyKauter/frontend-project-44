#!/usr/bin/env node
import gameEngine from '../src/index.js';
import { printNameOfTheGame, askQuestion, makelogic } from '../src/games/game-prime.js';

gameEngine(printNameOfTheGame, askQuestion, makelogic);
