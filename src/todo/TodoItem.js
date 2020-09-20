import React, { useContext } from "react";
import PropTypes from "prop-types";
// import { logDOM } from "@testing-library/react";
import Context from "../context";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "6px",
    marginBottom: ".5rem",
  },
  inpit: {
    marginRight: "1rem",
  },
};

function TodoItem({ itemo, chaCom }) {
  const { reTodo } = useContext(Context);
  const classes = [];

  if (itemo.complit) {
    classes.push("done");
  }

  return (
    <li style={styles.li}>
      <span className={classes.join(" ")}>
        <input
          type="checkbox"
          style={styles.inpit}
          onChange={() => chaCom(itemo.id)}
          checked={itemo.complit}
        />
        <strong>{itemo.id}</strong>
        &nbsp;
        {itemo.title}
      </span>

      <button className="rm" onClick={reTodo.bind(null, itemo.id)}>
        &times;
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  itemo: PropTypes.object.isRequired,
  chaCom: PropTypes.func.isRequired,
};

export default TodoItem;
