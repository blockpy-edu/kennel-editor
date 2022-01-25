import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {serverApi} from "../../store/enhancedApi";

export function Profile() {
    const {data: me, isLoading: meIsLoading } = serverApi.useMeQuery();
    return (
        <div style={{border: '1px solid black'}}>
          <p>{meIsLoading ?
              <span>Loading</span> :
              <span>{me?.first_name} {me?.last_name} ({me?.email})</span>}</p>
        </div>
    );
}
