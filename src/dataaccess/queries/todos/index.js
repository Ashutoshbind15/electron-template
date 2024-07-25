const mockTodos = [
  { id: 1, text: "Buy milk", completed: false },
  { id: 2, text: "Do laundry", completed: true },
  { id: 3, text: "Clean room", completed: false },
];

export const getTodos = async () => {
  // Simulate a delay of 1 second
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return mockTodos;
};
