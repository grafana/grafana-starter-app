import { AppRootProps, dateTime, FieldType, DataFrame, PanelData, LoadingState, toDataFrame } from '@grafana/data';
import { PanelRenderer } from '@grafana/runtime';
import { LegendDisplayMode, PanelChrome, PanelChromeProps } from '@grafana/ui';
import React, { FC } from 'react';

// Set amount of generated datapoints
// as well as min and max values of generated data
const DATA_LENGTH = 500;
const VAL_MIN = 1;
const VAL_MAX = 6666;

export const B: FC<AppRootProps> = ({ query, path, meta }) => {
  // Create data frames, in this case we simply generate
  // random values over a fixed interval from the current time
  const times = [];
  const vals = [];

  // Grab dates an calculate a week ago
  // and the corresponding step amount
  let now = dateTime();
  let weekAgo = dateTime().subtract(1, 'week');
  let stepper = dateTime().subtract(1, 'week');
  let step = (now.unix() - weekAgo.unix()) / DATA_LENGTH;

  // Generated random data points at evenly
  // separated times across the past week
  for (let i = 0; i < DATA_LENGTH; i++) {
    vals.push(Math.random() * (VAL_MAX - VAL_MIN) + VAL_MIN);
    times.push(stepper.add(step, 'seconds').valueOf());
  }

  // Construct data frame object
  // More information:
  // See https://grafana.com/docs/grafana/latest/developers/plugins/data-frames/
  // and https://grafana.com/docs/grafana/latest/developers/plugins/working-with-data-frames/
  const frame = toDataFrame({
    name: 'last_week_random',
    fields: [
      { name: 'Time', type: FieldType.time, values: times },
      { name: 'Value', type: FieldType.number, values: vals },
    ],
  });

  // Create DataFrame array and add constructed frame
  // which is necessary for the PanelData object
  const frames: DataFrame[] = [];
  frames.push(frame);

  // Using the data frames create a PanelData
  // object which will contain data frames
  // and time range for the viz
  const panelData: PanelData = {
    state: LoadingState.Done, // Set loading state as appropriate for viz
    series: frames, // The accumulated data frames
    timeRange: {
      from: weekAgo,
      to: now,
      raw: {
        from: weekAgo.toISOString(),
        to: now.toISOString(),
      },
    },
  };

  // Set options for Panel Chrome (wraps the panel)
  const panelProps: PanelChromeProps = {
    width: 400,
    height: 400,
    title: 'Title',
    children: () => undefined,
  };

  // Setup options for the panel
  const opts = {
    legend: {
      displayMode: LegendDisplayMode.List,
      placement: 'bottom',
      calcs: [],
    },
    graph: {},
    tooltipOptions: {
      mode: 'multi',
    },
    tooltip: {
      mode: 'multi',
    },
  };

  // Provide a barebones field configuration
  let fieldConfig = {
    defaults: {
      custom: {
        spanNulls: false,
      },
    },
    overrides: [],
  };

  return (
    <div>
      <PanelChrome {...panelProps}>
        {(innerWidth, innerHeight) => (
          <PanelRenderer
            title="Example"
            pluginId="timeseries"
            width={innerWidth}
            height={innerHeight}
            data={panelData}
            options={opts}
            fieldConfig={fieldConfig}
          />
        )}
      </PanelChrome>
    </div>
  );
};
