using System.Threading.Tasks;
using Newtonsoft.Json;
using TestQuest.Application;
using TestQuest.Domain.Interfaces;
using TestQuest.Domain;

namespace TestQuest.Application
{
    public class CreateMouseTrackDataInteractor
    {
        private readonly IMouseTrackDataRepository _repository;

        public CreateMouseTrackDataInteractor(IMouseTrackDataRepository repository)
        {
            _repository = repository;
        }

        public async Task ExecuteAsync(MouseTrackDataDto dataDto)
        {
            var data = new MouseTrackData
            {
                Data = dataDto.Data
            };
            await _repository.AddAsync(data);
        }
    }
}