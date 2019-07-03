// ISC License (ISC)
// Copyright 2019 Jean-Jacques Dubray

// Permission to use, copy, modify, and/or distribute this software for any purpose 
// with or without fee is hereby granted, provided that the above copyright notice 
// and this permission notice appear in all copies.

// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH 
// REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND 
// FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, 
// OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA 
// OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, 
// ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

import createInstance from './lib/sam-instance'
import SAM from './lib/SAM'
import api from './lib/sam-actions'
import { O, A, N, NZ, S, F, E, on, oneOf, or, and, match, step, first } from './sam-utils'

const { addInitialState, addComponent, setRender, 
    getIntents, addAcceptors, addReactors, addNAPs} = api

export default {
    SAM,
    createInstance,
    api,
    addInitialState,
    addComponent,
    addAcceptors,
    addReactors,
    addNAPs,
    getIntents,
    setRender,
    step,
    first,
    match,
    on, 
    oneOf,
    utils: {
        O, A, N, NZ, S, F, E, or, and
    }
}