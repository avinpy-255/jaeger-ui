// Copyright (c) 2023 The Jaeger Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from 'react';
import { getConfigValue } from '../../utils/config/get-config';
import './TraceIdDisplayLength.css';

type Props = {
  traceId: string;
  className?: string;
};

export function TraceIdDisplayLength({ traceId, className = '' }: Props) {
  const traceIdDisplayLength = getConfigValue('traceIdDisplayLength') || 7;
  const traceIdDisplay = traceId ? traceId.slice(-traceIdDisplayLength) : '';
  const lengthClass = traceIdDisplayLength === 7 ? 'TraceIDLength--short' : 'TraceIDLength--full';

  return (
    <small
      className={`TraceIDLength ${lengthClass} u-tx-muted ub-pr2 ${className} `}
      data-test="trace-id-short"
    >
      {traceIdDisplay}
    </small>
  );
}

export default TraceIdDisplayLength;
