export default function Footer({ fixed = true }: { fixed?: boolean }) {
  return (
    <div
      className={`w-full text-center text-[0.687rem] font-thin text-white opacity-75 ${
        fixed ? "fixed bottom-8" : "mt-40 mb-12"
      }`}
    >
      © CREATUAL {new Date().getFullYear()} &emsp;|&emsp;CO REG NO. 53449106E&emsp;|&emsp;TERMS OF SERVICES
    </div>
  );
}
