import { useRef, useEffect } from 'react'; //by Convention, we import from packages, then files, then images, then APP.css

function useAutoScroll(dependencies){
    const containerRef = useRef(null); // useRef allows us to automatically save a HTML element, this creates a ref (container with special react features)
    // we give the ref null so that its empty
    // We can use refs for anything that we want to update while the website is running and display the change

    useEffect(() => {
        const containerElem = containerRef.current;
        if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
        }
    }, dependencies); // React will run whatever function is given after the element is created
    // The array will conrol when useEffect is ran, so an empty array will only run when the component is created, this is called a Dependency Array
    // It is good practice to give useEffect a dependency array to control behavior

    return containerRef;

}

export default useAutoScroll;