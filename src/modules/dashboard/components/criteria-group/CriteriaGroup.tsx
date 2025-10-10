import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { motion, MotionStyle } from 'framer-motion';
import { memo } from 'react';

import rem from '@/core/utils/rem';
import { Criteria } from '@/modules/dashboard/hooks/use-best-selling-location-type/types';

import { Styles } from './styles';

import type { CriteriaGroupProps } from './types';

function CriteriaGroup({ criteria, onChangeCriteria }: CriteriaGroupProps) {
  const options = [
    { value: Criteria.ALL_TIME, label: 'All Time' },
    { value: Criteria.WEEKLY, label: 'Weekly' },
    { value: Criteria.MONTHLY, label: 'Monthly' },
  ];

  return (
    <ToggleButtonGroup
      value={criteria}
      exclusive
      onChange={onChangeCriteria}
      aria-label="CriteriaGroup-criteria"
      sx={Styles.toggleButtonGroup}
    >
      {options.map(
        (option) =>
          criteria === option.value && (
            <motion.div
              key={option.value}
              layoutId="CriteriaGroup-highlight"
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              style={Styles.motionDiv as MotionStyle}
              ref={(el) => {
                const selected = document.querySelector(
                  `[value="${option.value}"]`,
                ) as HTMLElement | null;

                if (el && selected) {
                  const { offsetLeft, offsetWidth } = selected;

                  el.style.left = rem(offsetLeft);
                  el.style.width = rem(offsetWidth);
                }
              }}
            />
          ),
      )}

      {options.map((option) => (
        <ToggleButton
          key={option.value}
          value={option.value}
          sx={{ zIndex: 1 }}
        >
          {option.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

export default memo(CriteriaGroup);
