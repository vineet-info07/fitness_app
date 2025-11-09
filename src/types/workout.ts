export interface Workout {
  id: string;
  title: string;
  duration: number;
  caloriesBurned: number;
  date: string;
  type: "cardio" | "strength" | "flexibility";
}

export interface AddWorkoutPayload {
  title: string;
  duration: number;
  type: "cardio" | "strength" | "flexibility";
}
