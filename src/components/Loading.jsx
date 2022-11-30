import { useState } from "react";

function Spinner() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  if (loading) {
    return <Spinner />;
  } else {
    return;
  }
}

export default Spinner;
