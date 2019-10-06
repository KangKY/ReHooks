export const useTitle = initTitle => {
    const [title, setTitle] = useState(initTitle);
    const updateTitle = () => {
      const htmlTitle = document.querySelector("title");
      htmlTitle.innerText = title;
      console.log(title);
    };
    useEffect(updateTitle, [title]);
    return setTitle;
  };