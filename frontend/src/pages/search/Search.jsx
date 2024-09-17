import React, { useState } from 'react';

import Nav from '../../components/browse/Nav';
import SearchResult from '../../components/search/SearchResult';
import './Search.css';

const Search = () => {
	const [query, setQuery] = useState('');
	const [searchInput, setSearchInput] = useState('');
	const [genre, setGenre] = useState('');
	const [mediaType, setmediaType] = useState('');
	const [language, setLanguage] = useState('');
	const [year, setYear] = useState('');

	const handleSearch = () => {
		setQuery({searchInput,genre,mediaType,language,year});
	}

	const resetSearch = () => {
		setQuery('');
		setSearchInput('');
		setGenre('')
		setmediaType('');
		setLanguage('')
		setYear('')
	}

	return (
		<div className='app'>
			<Nav />
			<div className='s009'>
				<form>
					<div className='inner-form'>
						<div className='basic-search'>
							<div className='input-field'>
								<input
									type='text'
									placeholder='Type Keywords'
									onChange={(e) => setSearchInput(e.target.value)}
									value={searchInput}
								/>
								<div className='icon-wrap' style={{marginTop: '-30px'}}>
									<svg
										className='svg-inline--fa fa-search fa-w-16'
										fill='#ccc'
										aria-hidden='true'
										data-prefix='fas'
										data-icon='search'
										role='img'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 512 512'>
										<path d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'></path>
									</svg>
								</div>
								<div className='input-field'>
									<div className='updated-serch'>
									<div className='genre'>
										<label>Thể Loại</label>
									<select value={genre} onChange={e => {setGenre(e.target.value)}}>
										<option></option>
										<option value='28'>Hành Động</option>
										<option value='35'>Hài</option>
										<option value='27'>Kinh Dị</option>
										<option value='10749'>Lãng mạng</option>
										<option value='99'>Tài liệu</option>
									</select>
									</div>
									<div className='mediaType'>
										<label>Thể Loại Phim</label>
									<select value={mediaType} onChange={e => {setmediaType(e.target.value)}}>
										<option ></option>
										<option value='all'>All</option>
										<option value='movie'>Movie</option>
										<option value='person'>Person</option>
										<option value='tv'>TV</option>
									</select>
									</div>
									<div className='language'>
										<label>Language</label>
									<select value={language} onChange={e => {setLanguage(e.target.value)}}>
										<option></option>
										<option value='en'>English</option>
										<option value='ja'>Japanese</option>
										<option value='ko'>Koreo</option>
							
						      		</select>
									</div>
									<div className='year'>
										<label>Year</label>
									<input type='text' value={year} 
									     onChange={e => {setYear(e.target.value)}} 
										 style={
											{height: '10px',
											width: '30%',
											fontSize:'16px',
											padding: '10px',
											boxSizing: 'inherit',
											border:'solid black 1px',
											textIndent:'0'}}  name='year'></input>
									</div>
									</div>
								</div>
							</div>
						</div>
						<div className='advance-search'>
							<div className='row third'>
								<div className='input-field'>
									<div className='result-count'>
										
									</div>
									<div className='group-btn'>
										<button
											className='btn-delete'
											onClick={resetSearch}
											type='button'
										>
											RESET
										</button>
										<button
											className='btn-search'
											type='button'
											onClick={() => handleSearch()}
										>SEARCH</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
			<SearchResult query={query} />
		</div>
	);
};

export default Search;
