import React from 'react'

const Accessibility = () => {
    return (
        <div className='pt-5 bg-white pb-1'>
            <div className='mt-4 bg-white container'>
                <div className='container'>
                    <div className="mb-4">
                        <div className="fs-1 fw-semibold mb-2">
                            Accessibility
                        </div>
                        <hr />
                        <div className="mb-4">
                            Legal Brothers is committed to ensuring that his website is accessible for all users, regardless of any disability they may have or the technology they use.
                        </div>
                    </div>
                    <div className="my-4 pt-4">
                        <div className="fs-3 mb-2 fw-semibold">
                            Tips for browsing our Website
                            <hr />
                        </div>
                        <div className="mb-4">
                            Almost every modern browser and operating system offers built-in features with assistive technologies. Below are some basic tips to address the most common accessible challenges. For a comprehensive list of tips on browsing, visit: W3C Web Accessibility Initiative – Better Web Browsing: Tips for Customizing Your Computer. http://www.w3.org/WAI/users/browsing
                        </div>
                    </div>
                    <div className="mb-4 pt-4">
                        <div className="mb-2 fs-3 fw-semibold">
                            Screen Readers
                            <hr />
                        </div>
                        <div className="mb-4">
                            The use of screen readers assists individuals who are blind or have visual impairment. The following are some popular screen readers:
                            <ul className='' style={{ listStyleType: "disc", color: "black" }}>
                                <li>1. Microsoft Narrator</li>
                                <li>2. Mac OS X Voiceover</li>
                                <li>3. JAWS</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-4 pt-4">
                        <div className="fs-3 mb-2 fw-semibold">
                            Zoom In
                            <hr />
                        </div>
                        <div className="my-2">
                            Many web browsers allow you to zoom in on web pages using simple keyboard controls. The magnifier allows you to focus on specific parts of the screen, enlarging the text and other page elements.
                        </div>
                        <div className="my-4">
                            <b>For Windows operating systems</b>
                            <li><b className=''>⭐</b> Press Ctrl and the + (plus) key to zoom in (Ctrl and the – (minus) key to zoom out).</li>
                        </div>
                        <div className="mb-4">
                            <b> For Mac operating systems</b>
                            <li><b className=''>⭐</b> Press Cmd and the + (plus) key to zoom in (Cmd and the – (minus) key to zoom out).</li>
                        </div>
                    </div>
                    <div className="mb-4 pt-4">
                        <div className="mb-2 fs-3 fw-semibold">
                            Customize the Mouse Pointer
                            <hr/>
                        </div>
                        <div className="mb-4">
                            Changing the speed of which your mouse pointer moves assists those individuals with motor skill impairment. By slowing down the speed of your mouse pointer, navigation or buttons are easier to click on.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accessibility