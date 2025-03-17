export default function Footer() {
    return (
        <div style={{ padding: "20px", textAlign: "center"}}>
            <h4>This website has been created by Lison Fortin</h4>
            <p>
                A helpful tool for worldbuilders to create, explore, and refine imaginary worlds. 
                Whether you're building a universe for a novel, game, or other creative project, 
                this site provides resources, templates, and inspiration to help shape your world.
            </p>
            <h5>This website has been made in the topic of a school project.</h5>
            <p style={{ marginTop: "20px" }}>
                &copy; {new Date().getFullYear()} Lison Fortin. All Rights Reserved.
            </p>
        </div>
    );
}