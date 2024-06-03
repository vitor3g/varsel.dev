import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import * as THREE from "three";

export function lerp(object: any, prop: any, goal: any, speed = 0.1) {
  object[prop] = THREE.MathUtils.lerp(object[prop], goal, speed);
}

const color = new THREE.Color();
export function lerpC(value: any, goal: any, speed = 0.1) {
  value.lerp(color.set(goal), speed);
}

const vector = new THREE.Vector3();

export function lerpV3(value: any, goal: any, speed = 0.1) {
  value.lerp(vector.set(goal.x, goal.y, goal.z), speed);
}

export function calculateRefractionAngle(
  incidentAngle: any,
  glassIor = 2.5,
  airIor = 1.000293,
) {
  const theta = Math.asin((airIor * Math.sin(incidentAngle)) / glassIor) || 0;
  return theta;
}
