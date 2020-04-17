import React from "react";

import Spinner from "../spinner/spinner.component";

const WithSpinner = WrappedCompnent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <Spinner />
    ) : (
        <WrappedCompnent {...otherProps} />
    )
}

export default WithSpinner;