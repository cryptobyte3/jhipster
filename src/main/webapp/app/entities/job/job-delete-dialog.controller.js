(function() {
    'use strict';

    angular
        .module('isoftnetApp')
        .controller('DeleteJobsController',DeleteJobsController);

    DeleteJobsController.$inject = ['$uibModalInstance','Job' ,'$stateParams'];

    function DeleteJobsController($uibModalInstance, Job, $stateParams) {
        var vm = this;

        vm.clear = clear;
        vm.deleteJobs = deleteJobs;

        console.log($stateParams.selectIDs);
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function deleteJobs () {
            Job.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
