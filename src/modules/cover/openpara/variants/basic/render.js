import React from 'react'

const useStyles = (theme) => ({
  root: {
    backgroundColor: 'white',
    padding: 20
  },
  openPara: {
    margin: 0
  }
})

const Basic = (
  {
    theme,
    recruiterName,
    openPara
  }
) => {
  const styles = useStyles();

  return (
    <div style={{
      ...styles.root,
      backgroundColor: theme.value.color,
      color: theme.value.contrast
    }}>
      {
        <div >
            <h4 style={styles.openPara}>Dear {recruiterName.value ? recruiterName.value + ',' : ','}</h4>
            <br />
            <p style={styles.openPara}>{openPara.value}</p>
        </div>
      }
    </div>
  );
};

export default Basic;