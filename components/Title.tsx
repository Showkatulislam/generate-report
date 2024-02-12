interface TitleProps{
    title:string
}
export const Title = ({ title }:TitleProps) => {
    return (
      <div>
        <h2 className="space-y-2 shadow-lg py-2 text-white text-center font-semibold bg-lime-600 rounded-sm">
          {title}
        </h2>
      </div>
    );
  };
  