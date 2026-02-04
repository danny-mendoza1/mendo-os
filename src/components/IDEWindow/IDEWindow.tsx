import { useState } from "react";
import { Gamepad2, Code2, Columns2 } from "lucide-react";
import styles from "./IDEWindow.module.css";

interface IDEWindowProps {
  godotCode: string;
  reactCode: string;
  godotFileName: string;
  reactFileName: string;
}

type ViewMode = "godot" | "react" | "split";

export function IDEWindow({ godotCode, reactCode, godotFileName, reactFileName }: IDEWindowProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("react");
  const [isSplitView, setIsSplitView] = useState(false);

  const toggleSplitView = () => {
    setIsSplitView(!isSplitView);
  };

  return (
    <div className={styles.ideWindow}>
      {/* Tab Bar */}
      <div className={styles.ideTabBar}>
        <div className={styles.ideTabs}>
          <button
            className={`${styles.ideTab} ${
              viewMode === "godot" && !isSplitView ? styles.ideTabActive : ""
            }`}
            onClick={() => {
              setViewMode("godot");
              setIsSplitView(false);
            }}
          >
            <Gamepad2 size={14} />
            <span>{godotFileName}</span>
          </button>
          <button
            className={`${styles.ideTab} ${
              viewMode === "react" && !isSplitView ? styles.ideTabActive : ""
            }`}
            onClick={() => {
              setViewMode("react");
              setIsSplitView(false);
            }}
          >
            <Code2 size={14} />
            <span>{reactFileName}</span>
          </button>
        </div>
        <button
          className={`${styles.splitViewButton} ${isSplitView ? styles.splitViewActive : ""}`}
          onClick={toggleSplitView}
          title="Toggle split view"
        >
          <Columns2 size={16} />
          <span className={styles.splitViewText}>Compare</span>
        </button>
      </div>

      {/* Code Content */}
      <div className={`${styles.ideContent} ${isSplitView ? styles.ideContentSplit : ""}`}>
        {isSplitView ? (
          <>
            <div className={styles.idePane}>
              <div className={styles.idePaneHeader}>
                <Gamepad2 size={14} />
                <span>{godotFileName}</span>
              </div>
              <div className={styles.codeBlock}>
                <pre>{godotCode}</pre>
              </div>
            </div>
            <div className={styles.idePane}>
              <div className={styles.idePaneHeader}>
                <Code2 size={14} />
                <span>{reactFileName}</span>
              </div>
              <div className={styles.codeBlock}>
                <pre>{reactCode}</pre>
              </div>
            </div>
          </>
        ) : (
          <div className={styles.codeBlock}>
            <pre>{viewMode === "godot" ? godotCode : reactCode}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
