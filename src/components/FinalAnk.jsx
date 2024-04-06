import React, { useState, useRef, useEffect } from 'react';
import './final.css'

const FinalAnk = ({ data }) => {
    const scrollContainerRef = useRef(null);
    const [items, setItems] = useState([]);

    useEffect(() => {

        const initialItems = data.map((item, index) => {
            return (
                <div key={index} class="mx-5 px-5" style={{ display: 'inline-block', height: 'fit-content' }}>
                    {item.name}-{item.number}
                </div>
            )
        })

        setItems(initialItems);

        // Function to automatically scroll every 1 second
        const scrollAutomatically = () => {
            const container = scrollContainerRef.current;
            if (container) {
                container.scrollLeft += 2; // Adjust scroll speed here
                const scrollWidth = container.scrollWidth;
                const clientWidth = container.clientWidth;
                if (container.scrollLeft + clientWidth >= scrollWidth) {
                    // If scrolled to the end, reset to the beginning
                    container.scrollLeft = 0;
                }
            }
        };

        // Set interval to scroll automatically
        const intervalId = setInterval(scrollAutomatically, 50); // Change interval time as needed

        // Cleanup function to clear interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    return (
        <div
            className="scroll-container"
            ref={scrollContainerRef}
            style={{
                width: '100%',
                overflowX: 'scroll',
                whiteSpace: 'nowrap',
            }}
        >
            {items}
        </div>
    );
}

export default FinalAnk;
