import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function ClaudeRecipe(props) {
  return (
    <section className="suggested-recipe">
      <h2>Chef Claude Recommends:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
}
