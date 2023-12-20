import React from 'react';
import DOMPurify from 'dompurify';

const UpdateItem = ({ update }) => {
  const parsedContent = JSON.parse(update);

  const renderTextWithStyles = (block) => {
    const textWithStyles = [];

    let currentStyle = {};
    block.inlineStyleRanges.forEach((style) => {
      const styleProps = {
        fontWeight: style.style === 'BOLD' ? 'bold' : 'normal',
        fontStyle: style.style === 'ITALIC' ? 'italic' : 'normal',
      };

      if (JSON.stringify(currentStyle) !== JSON.stringify(styleProps)) {
        // If styles change, start a new span
        textWithStyles.push({
          text: '',
          style: { ...currentStyle },
        });
        currentStyle = { ...styleProps };
      }

      textWithStyles[textWithStyles.length - 1].text +=
        block.text.substring(style.offset, style.offset + style.length);
    });

    return textWithStyles.map((textWithStyle, index) => (
      <span
        key={index}
        style={textWithStyle.style}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(textWithStyle.text.replace(/\n/g, '<br/>')),
        }}
      />
    ));
  };

  return (
    <div>
      {parsedContent.blocks.map((block, index) => (
        <div key={index}>
          {block.type === 'unstyled' ? (
            <p>{renderTextWithStyles(block)}</p>
          ) : block.type === 'unordered-list-item' ? (
            <ul>
              <li>{renderTextWithStyles(block)}</li>
            </ul>
          ) : block.type === 'ordered-list-item' ? (
            <ol>
              <li>{renderTextWithStyles(block)}</li>
            </ol>
          ) : (
            <div>{renderTextWithStyles(block)}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default UpdateItem;
