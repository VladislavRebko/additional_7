module.exports = function solveSudoku(matrix,ziro) {

let numbers = [1,2,3,4,5,6,7,8,9];
let objectArray = [];
let numbArray = [];
let obj = {};
let index;
let count_col = 0;
let countBlock = 0;
let swap;
let numbersFor = [];
let zeroPasst = ziro || 0;
for(let i = 0; i < matrix.length; i++){
		for(let j = 0; j < 9; j++){
				for(let k = 0; k < numbers.length; k++){
						if(matrix[i][j] == numbers[k]){
								numbers.splice(k,1);
								k--;
						}
				}
		}

		for(let j = 0; j < 9; j++) {
				if(matrix[i][j] == 0){
						for(let k = 0; k < numbers.length; k++){
								for(let l = 0; l < 9; l++){
										if(numbers[k] != matrix[l][j]){
												count_col++;
										}
								}
								if(i >= 0 && i <= 2){
										if(j >= 0 && j <= 2){
												for(let l = 0; l < 3; l++){
														for(let m = 0; m < 3; m++){
																if(numbers[k] != matrix[l][m]){
																		countBlock++;
																}
														}
												}
										} else if (j >= 3 && j <= 5){
												for(let l = 0; l < 3; l++){
														for(let m = 3; m < 6; m++){
																if(numbers[k] != matrix[l][m]){
																		countBlock++;
																}
														}
												}
										} else if (j >= 6 && j <= 8){
												for(let l = 0; l < 3; l++){
														for(let m = 6; m < 9; m++){
																if(numbers[k] != matrix[l][m]){
																		countBlock++;
																}
														}
												}
										}
								} else if (i >= 3 && i <= 5){
										if(j >= 0 && j <= 2){
												for(let l = 3; l < 6; l++){
														for(let m = 0; m < 3; m++){
																if(numbers[k] != matrix[l][m]){
																		countBlock++;
																}
														}
												}
										} else if (j >= 3 && j <= 5){
												for(let l = 3; l < 6; l++){
														for(let m = 3; m < 6; m++){
																if(numbers[k] != matrix[l][m]){
																		countBlock++;
																}
														}
												}
										} else if (j >= 6 && j <= 8){
												for(let l = 3; l < 6; l++){
														for(let m = 6; m < 9; m++){
																if(numbers[k] != matrix[l][m]){
																		countBlock++;
																}
														}
												}
										}
								} else if(i >= 6 && i <= 8){
										if(j >= 0 && j <= 2){
												for(let l = 6; l < 9; l++){
														for(let m = 0; m < 3; m++){
																if(numbers[k] != matrix[l][m]){
																		countBlock++;
																}
														}
												}
										} else if (j >= 3 && j <= 5){
												for(let l = 6; l < 9; l++){
														for(let m = 3; m < 6; m++){
																if(numbers[k] != matrix[l][m]){
																		countBlock++;
																}
														}
												}
										} else if (j >= 6 && j <= 8){
												for(let l = 6; l < 9; l++){
														for(let m = 6; m < 9; m++){
																if(numbers[k] != matrix[l][m]){
																		countBlock++;
																}
														}
												}
										}
								}

								if(countBlock == 9 && count_col == 9){
										numbArray.push(numbers[k])
								}
								count_col = 0;
								countBlock = 0;
						}
						obj['index'] = j;
						obj['numbers'] = numbArray;
						numbArray = [];
						objectArray.push(obj);
						obj = {};
				}
		}

		for(let j = 0; j < objectArray.length; j++){
				if(objectArray[j]['numbers'].length == 1){
						swap = objectArray[j]['numbers'][0];
						index = objectArray[j]['index'];
						matrix[i].splice(index,1,swap);
						objectArray[j]['numbers'] = [];
						j = -1;
						for(let k = 0; k < objectArray.length; k++){
								for(let l = 0; l < objectArray[k]['numbers'].length; l++){
										if(swap == objectArray[k]['numbers'][l]){
												objectArray[k]['numbers'].splice(l,1);
										}
								}
						}
				}
		}
		objectArray = [];
		numbers = [1,2,3,4,5,6,7,8,9];
}

function refresh() {
		objectArray = [];
		numbers = [1,2,3,4,5,6,7,8,9];

		for(let i = 0; i < matrix.length; i++){
				for(let j = 0; j < 9; j++){
						for(let k = 0; k < numbers.length; k++){
								if(matrix[i][j] == numbers[k]){
										numbers.splice(k,1);
										k--;
								}
						}
				}

				for(let j = 0; j < 9; j++) {
						if(matrix[i][j] == 0){
								for(let k = 0; k < numbers.length; k++){
										for(let l = 0; l < 9; l++){
												if(numbers[k] != matrix[l][j]){
														count_col++;
												}
										}
										if(i >= 0 && i <= 2){
												if(j >= 0 && j <= 2){
														for(let l = 0; l < 3; l++){
																for(let m = 0; m < 3; m++){
																		if(numbers[k] != matrix[l][m]){
																				countBlock++;
																		}
																}
														}
												} else if (j >= 3 && j <= 5){
														for(let l = 0; l < 3; l++){
																for(let m = 3; m < 6; m++){
																		if(numbers[k] != matrix[l][m]){
																				countBlock++;
																		}
																}
														}
												} else if (j >= 6 && j <= 8){
														for(let l = 0; l < 3; l++){
																for(let m = 6; m < 9; m++){
																		if(numbers[k] != matrix[l][m]){
																				countBlock++;
																		}
																}
														}
												}
										} else if (i >= 3 && i <= 5){
												if(j >= 0 && j <= 2){
														for(let l = 3; l < 6; l++){
																for(let m = 0; m < 3; m++){
																		if(numbers[k] != matrix[l][m]){
																				countBlock++;
																		}
																}
														}
												} else if (j >= 3 && j <= 5){
														for(let l = 3; l < 6; l++){
																for(let m = 3; m < 6; m++){
																		if(numbers[k] != matrix[l][m]){
																				countBlock++;
																		}
																}
														}
												} else if (j >= 6 && j <= 8){
														for(let l = 3; l < 6; l++){
																for(let m = 6; m < 9; m++){
																		if(numbers[k] != matrix[l][m]){
																				countBlock++;
																		}
																}
														}
												}
										} else if(i >= 6 && i <= 8){
												if(j >= 0 && j <= 2){
														for(let l = 6; l < 9; l++){
																for(let m = 0; m < 3; m++){
																		if(numbers[k] != matrix[l][m]){
																				countBlock++;
																		}
																}
														}
												} else if (j >= 3 && j <= 5){
														for(let l = 6; l < 9; l++){
																for(let m = 3; m < 6; m++){
																		if(numbers[k] != matrix[l][m]){
																				countBlock++;
																		}
																}
														}
												} else if (j >= 6 && j <= 8){
														for(let l = 6; l < 9; l++){
																for(let m = 6; m < 9; m++){
																		if(numbers[k] != matrix[l][m]){
																				countBlock++;
																		}
																}
														}
												}
										}

										if(countBlock == 9 && count_col == 9){
												numbArray.push(numbers[k])
										}
										count_col = 0;
										countBlock = 0;
								}
								obj['X'] = j;
								obj['Y'] = i;
								obj['numbers'] = numbArray;
								numbArray = [];
								objectArray.push(obj);
								obj = {};
						}
				}
				numbers = [1,2,3,4,5,6,7,8,9];
		}

}

refresh();

	for(let i = 0; i < matrix.length; i++){
			row: for(let j = 0; j < 9; j++){
					if(matrix[i][j] == 0){
							for(let k = 0; k < objectArray.length; k++){
									if(objectArray[k]['X'] == j && objectArray[k]['Y'] == i){
											numbersFor = objectArray[k]['numbers'];
											next: for(let l = 0; l < numbersFor.length; l++) {
													obj: for(let m = 0; m < objectArray.length; m++){
															if (objectArray[k]['Y'] == objectArray[m]['Y'] && objectArray[k]['X'] != objectArray[m]['X']){
																	for(let n = 0; n < objectArray[m]['numbers'].length; n++){
																			if (numbersFor[l] == objectArray[m]['numbers'][n]){
																					continue next;
																			}
																	}
															}
															if(m < objectArray.length - 1){
																	continue obj;
															} else if(m == objectArray.length - 1) {
																	matrix[i].splice(j,1,numbersFor[l]);
																	objectArray.splice(k,1);
																	refresh();
																	continue row;
															}
													}
											}

											next: for(let l = 0; l < numbersFor.length; l++) {
													obj: for(let m = 0; m < objectArray.length; m++){
															if (objectArray[k]['X'] == objectArray[m]['X'] && objectArray[k]['Y'] != objectArray[m]['Y']){
																	for(let n = 0; n < objectArray[m]['numbers'].length; n++){
																			if (numbersFor[l] == objectArray[m]['numbers'][n]){
																					continue next;
																			}
																	}
															}
															if(m < objectArray.length - 1){
																	continue obj;
															} else if(m == objectArray.length - 1) {
																	matrix[i].splice(j,1,numbersFor[l]);
																	objectArray.splice(k,1);
																	refresh();
																	continue row;
															}
													}
											}

									}
							}
					}
			}
	}

	let countTrue = 0;
	for(let i = 0; i < matrix.length; i++){
			for(let j = 0; j < 9; j++){
					if(matrix[i][j] == 0){
							countTrue++;
					}
			}
	}
	if(countTrue == zeroPasst){
			for(let i = 0; i < matrix.length; i++){
					for(let j = 0; j < 9; j++){
							if(matrix[i][j] == 0){
									matrix[i].splice(j,1,[]);
							}
					}
			}
			return matrix;
	}
	if(countTrue > 0){
			zeroPasst = countTrue;
			return solveSudoku(matrix,zeroPasst);
	} else if(countTrue == 0){
			return matrix;
	}
}