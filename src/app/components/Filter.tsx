import '../styles.css';

function Filter({ quickFilterText, setQuickFilterText }) {
  return (
    <div className='filter-wrapper'>
      <label
        className='label'
        htmlFor='filter'
      >
        Filter table:
      </label>
      <div style={{ width: '100%' }}>
        <input
          className='input'
          id='filter'
          onChange={(e) => setQuickFilterText(e.target.value)}
          placeholder='enter term(s) to filter rows'
          type='text'
          value={quickFilterText}
        />
      </div>
    </div>
  )
}

export default Filter
