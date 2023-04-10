import { getStoredCart } from "../utils/fakedb";

export const serviceAndCartData = async () => {
  const jobsData = await fetch("data.json");
  const jobs = await jobsData.json();

  const savedCart = getStoredCart();
  const initialCart = [];
  for (const id in savedCart) {
    const foundJob = jobs.find((job) => job.id === id);
    if (foundJob) {
      const quantity = savedCart[id];
      foundJob.quantity = quantity;
      initialCart.push(foundJob);
    }
  }

  return { jobs, initialCart };
};
