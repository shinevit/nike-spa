/**
 * Inline SVG to take advantage of currentColor (parent:text-color)
 */ 
const SvgImage = ({ src }) => {
    const svgContent = decodeURI(src.split(",")[1]);
    return (
        <div dangerouslySetInnerHTML={{ __html: svgContent }} />
    );
};

export default SvgImage;