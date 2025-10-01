export const Welcome = () => {
  return (
    <div className="w-full mb-4 relative flex items-center justify-center bg-[url(/background.jpg)] bg-center bg-no-repeat bg-cover px-3 h-[15rem]">
      <span className="!text-primary font-bold text-[1.5rem] max-w-[30rem] text-center z-[1] animate-entrance">
        Vista o Blue Cap e descubra o poder do aprendizado.
      </span>

      <div className="w-full h-[20rem] backdrop-blur-[0.2rem] absolute left-0 top-0 bg-[linear-gradient(to_bottom,#c4d7ff78,#d7e0ff80,#e7eaff8c,#f4f4fe7d,#ffffff85)]" />
    </div>
  );
};
