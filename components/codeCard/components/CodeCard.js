import React from "react";
import Prism from "prismjs";

class CodeCard extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <div className="space">
        <div className="card">
          <div className="card-shine" />
          <div className="code-snippet">
            <pre>
              <code className={`prism language-${this.props.language}`}>
                {this.props.code}
              </code>
            </pre>
          </div>
        </div>
      </div>
    );
  }
}

export default CodeCard;
