interface Props{
  url: string;
  repoUrl: string;
}

const Experience:React.FC<Props> = ({url, repoUrl, }) => {
  return (
    <>
      <div>
        <img src="" alt="alt" />
        <div>
          info
          <div>
            <a href={url}>Project link</a>
            <a href={repoUrl}>Reposotory link</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
