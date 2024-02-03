






import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const YourReactComponent = () => {
  const videoRef = useRef(null);
  useEffect(() => {
  
    
      // Selecting the Video Element
      const video = videoRef.current;
      let src = video.currentSrc || video.src;
  
      // Ensuring Video Playback on iOS Devices
      const once = (el, event, fn, opts) => {
        const onceFn = function (e) {
          el.removeEventListener(event, onceFn);
          fn.apply(this, arguments);
        };
        el.addEventListener(event, onceFn, opts);
        return onceFn;
      };
  
      once(document.documentElement, 'touchstart', function (e) {
        video.play();
        video.pause();
      });
  
      // Scroll Control with GSAP
      gsap.registerPlugin(ScrollTrigger);
  
      const tl = gsap.timeline({
      
        defaults: { duration: 4 },
        scrollTrigger: {
          trigger: main.current,
          start: '30% bottom',
          end: 'bottom top',
           scrub: true,
          markers:true,
          smooth:true,
          toggleActions: 'play reverse play reverse',
        },
      });
  
      once(video, 'loadedmetadata', () => {
          
        tl.fromTo(
          video,
          {
            currentTime: 0,
          },
          {
              scale:1.7,
            currentTime: 4,
          }
        );
      });
  
      // Handling Video Metadata and Blobbing
      setTimeout(function () {
          if (window["fetch"]) {
            fetch(src)
              .then((response) => response.blob())
              .then((response) => {
                var blobURL = URL.createObjectURL(response);
        
                var t = video.currentTime;
                once(document.documentElement, "touchstart", function (e) {
                  video.play();
                  video.pause();
                });
        
                video.setAttribute("src", blobURL);
                video.currentTime = t + 0.01;
              });
          }
        }, 1000);
    
  
  //  gsap.to(videoRef.current, {
  //      scale:1.5,
  //      opacity:1,
  //      duration:0.2,
  //      scrollTrigger: {
  //          trigger: videoRef.current,
  //          start: 'top 50%',
  //          end: '80% 60%',
  //          toggleActions: 'play reverse play reverse',
  //          markers: true,
  //          scrub:true,
  //      },
  //  })
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    let src = video.currentSrc || video.src;

    const once = (el, event, fn, opts) => {
      const onceFn = function (e) {
        el.removeEventListener(event, onceFn);
        fn.apply(this, arguments);
      };
      el.addEventListener(event, onceFn, opts);
      return onceFn;
    };

    // Use useEffect to mimic componentDidMount
    
      gsap.registerPlugin(ScrollTrigger);

      let tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: "#container",
          start: "top top",
          end: "bottom bottom",
          scrub: true
        }
      });

      once(video, "loadedmetadata", () => {
        tl.fromTo(
          video,
          {
            currentTime: 0
          },
          {
            currentTime: video.duration || 1
          }
        );
      });

      setTimeout(() => {
        if (window.fetch) {
          fetch(src)
            .then((response) => response.blob())
            .then((response) => {
              var blobURL = URL.createObjectURL(response);

              var t = video.currentTime;
              once(document.documentElement, "scroll", function (e) {
                video.play();
                video.pause();
              });

              video.setAttribute("src", blobURL);
              video.currentTime = t + 0.01;
            });
        }
      }, 1000);
    // Empty dependency array to mimic componentDidMount

  
  }, []); // Empty dependency array to mimic componentDidMount

  return (
    <div>
      <video ref={videoRef} className="video-background">
        {/* Video source elements go here */}
      </video>
    </div>
  );
};

export default YourReactComponent;
