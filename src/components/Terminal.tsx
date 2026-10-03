import { profile } from "@/data/portfolio";

const terminalRows = [
  { command: "$ whoami", value: profile.name },
  { command: "$ role", value: profile.role },
  {
    command: "$ focus",
    value: (
      <span className="terminal-value--stack">
        <span>Full-Stack Development</span>
        <span>Systems Engineering</span>
        <span>Software Architecture</span>
      </span>
    ),
  },
  { command: "$ status", value: "Building • Learning • Improving" },
];

export function Terminal() {
  return (
    <div className="terminal-card" role="region" aria-label={`${profile.name}'s engineering profile terminal`}>
      <div className="terminal-topbar" aria-hidden="true">
        <span className="terminal-dot" />
        <span className="terminal-dot" />
        <span className="terminal-dot" />
        <span className="terminal-title">profile — zsh</span>
      </div>
      <div className="terminal-body">
        {terminalRows.map((row) => (
          <div className="terminal-line" key={row.command}>
            <span className="terminal-command">{row.command}</span>
            <span className="terminal-value">{row.value}</span>
          </div>
        ))}
        <div className="terminal-line" aria-hidden="true">
          <span className="terminal-command">$</span>
          <span className="terminal-value"><span className="terminal-cursor" /></span>
        </div>
      </div>
      <div className="terminal-footer">
        <span className="status-dot" aria-hidden="true" />
        <span>Systems online</span>
        <span aria-hidden="true">·</span>
        <span>Ready to build</span>
      </div>
    </div>
  );
}
