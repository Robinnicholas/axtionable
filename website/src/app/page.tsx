import { Applied, FullTimne, Remote } from "./components/Badge";

export default function Home() {
  return (
    <div className="flex gap-2 mx-40 my-20">
      <FullTimne />
      <Remote />
      <Applied />
    </div>
  );
}
