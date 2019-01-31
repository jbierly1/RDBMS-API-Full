exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('cohorts')
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex('cohorts').insert([
				{ name: 'cool krew' },
				{ name: 'team tom' },
				{ name: 'cohort of the gods' }
			]);
		});
};