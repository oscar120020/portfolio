import { socialMedia } from "../../constants";

export const Header = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className={`max-w-7xl p-6 flex flex-col justify-center items-center`}>
        <div>
          <h1
            className={`text-white text-[45px] text-center font-bold sm:leading-12 leading-[52px]`}
          >
            Hola, soy <span className="text-tertiary">Oscar Martinez</span>
          </h1>
          <p className={`text-white-100 text-[22px] text-center`}>
            Desarrollador Full-Stack
          </p>
        </div>
        <div className="flex gap-3 mt-3">
          {
            socialMedia.map(media => (
              <a
                key={media.url}
                href={media.url}
                target="_blank"
                className="w-[35px] h-[35px] border-[2px] border-tertiary rounded-lg p-[5px]"
              >
                <img src={media.icon} alt={media.name} />
              </a>
            ))
          }
        </div>
      </div>
    </div>
  );
};
