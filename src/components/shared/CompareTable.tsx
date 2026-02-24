import { motion } from 'framer-motion';
import { fadeInUp, defaultViewport } from '../../animations';

interface CompareRow {
  old: string;
  new: string;
}

interface CompareTableProps {
  oldHeader: string;
  newHeader: string;
  rows: CompareRow[];
  delay?: number;
}

export function CompareTable({ oldHeader, newHeader, rows, delay = 0 }: CompareTableProps) {
  return (
    <motion.div
      className="compare-table"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      transition={{ delay }}
    >
      <div className="compare-header">
        <div className="compare-header-cell old">{oldHeader}</div>
        <div className="compare-header-cell new">{newHeader}</div>
      </div>
      {rows.map((row, i) => (
        <div className="compare-row" key={i}>
          <div className="compare-cell old">{row.old}</div>
          <div className="compare-cell new">{row.new}</div>
        </div>
      ))}
    </motion.div>
  );
}
