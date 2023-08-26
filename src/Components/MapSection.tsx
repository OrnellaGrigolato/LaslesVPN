const MapSection = () => {
  return (
    <section className="mt-40 text-center w-4/5 mx-auto max-xl:mt-28">
      <h2 className="font-medium leading-relaxed text-4xl mb-5 w-96 mx-auto">
        Huge Global Network of Fast VPN
      </h2>
      <p className="w-[35rem] mx-auto mb-44 max-xl:mb-20 max-xl:w-full">
        See <strong>LaslesVPN</strong> everywhere to make it easier for you when
        you move locations.
      </p>
      <img src="./map.jpg" alt="" className="mx-auto w-[100%]" />
      <div className="flex justify-center gap-5 items-center">
        <img className="w-[20%]" src="./Companies Icons/netflix.svg" alt="" />
        <img className="w-[20%]" src="./Companies Icons/reddit.svg" alt="" />
        <img className="w-[20%]" src="./Companies Icons/amazon.svg" alt="" />
        <img className="w-[20%]" src="./Companies Icons/discord.svg" alt="" />
        <img className="w-[20%]" src="./Companies Icons/spotify.svg" alt="" />
      </div>
    </section>
  );
};

export default MapSection;
